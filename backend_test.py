#!/usr/bin/env python3
"""
Backend API Testing Suite for The Lantern Fly Guys Website
Tests all FastAPI endpoints and database connectivity
"""

import requests
import json
import os
import sys
from datetime import datetime
from typing import Dict, Any
import uuid

# Get backend URL from environment
BACKEND_URL = "https://treeguard-app.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.session = requests.Session()
        
    def log_test(self, test_name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {test_name}: {details}")
        
    def test_root_endpoint(self):
        """Test the root API endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Root Endpoint", True, "Root endpoint responding correctly", data)
                else:
                    self.log_test("Root Endpoint", False, f"Unexpected response: {data}")
            else:
                self.log_test("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Connection error: {str(e)}")
    
    def test_create_status_check(self):
        """Test creating a status check"""
        try:
            test_data = {
                "client_name": "Lantern Fly Test Client"
            }
            
            response = self.session.post(
                f"{self.base_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                
                if all(field in data for field in required_fields):
                    if data["client_name"] == test_data["client_name"]:
                        self.log_test("Create Status Check", True, "Status check created successfully", data)
                        return data["id"]  # Return ID for further testing
                    else:
                        self.log_test("Create Status Check", False, "Client name mismatch in response")
                else:
                    self.log_test("Create Status Check", False, f"Missing required fields in response: {data}")
            else:
                self.log_test("Create Status Check", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Create Status Check", False, f"Error creating status check: {str(e)}")
        
        return None
    
    def test_get_status_checks(self):
        """Test retrieving status checks"""
        try:
            response = self.session.get(f"{self.base_url}/status")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Get Status Checks", True, f"Retrieved {len(data)} status checks", {"count": len(data)})
                    return data
                else:
                    self.log_test("Get Status Checks", False, f"Expected list, got: {type(data)}")
            else:
                self.log_test("Get Status Checks", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Get Status Checks", False, f"Error retrieving status checks: {str(e)}")
        
        return []
    
    def test_database_connectivity(self):
        """Test database connectivity by creating and retrieving data"""
        try:
            # Create a test record
            test_client_name = f"DB_Test_Client_{uuid.uuid4().hex[:8]}"
            create_data = {"client_name": test_client_name}
            
            create_response = self.session.post(
                f"{self.base_url}/status",
                json=create_data,
                headers={"Content-Type": "application/json"}
            )
            
            if create_response.status_code != 200:
                self.log_test("Database Connectivity", False, "Failed to create test record")
                return
            
            created_record = create_response.json()
            
            # Retrieve all records and check if our test record exists
            get_response = self.session.get(f"{self.base_url}/status")
            
            if get_response.status_code != 200:
                self.log_test("Database Connectivity", False, "Failed to retrieve records")
                return
            
            all_records = get_response.json()
            
            # Check if our test record exists in the retrieved data
            test_record_found = any(
                record.get("client_name") == test_client_name 
                for record in all_records
            )
            
            if test_record_found:
                self.log_test("Database Connectivity", True, "Database read/write operations working correctly")
            else:
                self.log_test("Database Connectivity", False, "Test record not found in database")
                
        except Exception as e:
            self.log_test("Database Connectivity", False, f"Database connectivity error: {str(e)}")
    
    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            response = self.session.options(f"{self.base_url}/")
            
            cors_headers = [
                "Access-Control-Allow-Origin",
                "Access-Control-Allow-Methods",
                "Access-Control-Allow-Headers"
            ]
            
            present_headers = [header for header in cors_headers if header in response.headers]
            
            if len(present_headers) >= 1:  # At least some CORS headers present
                self.log_test("CORS Configuration", True, f"CORS headers present: {present_headers}")
            else:
                self.log_test("CORS Configuration", False, "No CORS headers found")
                
        except Exception as e:
            self.log_test("CORS Configuration", False, f"Error testing CORS: {str(e)}")
    
    def test_api_error_handling(self):
        """Test API error handling with invalid requests"""
        try:
            # Test invalid JSON
            response = self.session.post(
                f"{self.base_url}/status",
                data="invalid json",
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code in [400, 422]:  # Expected error codes
                self.log_test("Error Handling - Invalid JSON", True, f"Properly handled invalid JSON with status {response.status_code}")
            else:
                self.log_test("Error Handling - Invalid JSON", False, f"Unexpected status code: {response.status_code}")
            
            # Test missing required field
            response = self.session.post(
                f"{self.base_url}/status",
                json={},  # Missing client_name
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code in [400, 422]:  # Expected error codes
                self.log_test("Error Handling - Missing Field", True, f"Properly handled missing field with status {response.status_code}")
            else:
                self.log_test("Error Handling - Missing Field", False, f"Unexpected status code: {response.status_code}")
                
        except Exception as e:
            self.log_test("Error Handling", False, f"Error testing error handling: {str(e)}")
    
    def test_response_format(self):
        """Test response format consistency"""
        try:
            # Test root endpoint response format
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                try:
                    data = response.json()
                    self.log_test("Response Format - JSON", True, "Root endpoint returns valid JSON")
                except json.JSONDecodeError:
                    self.log_test("Response Format - JSON", False, "Root endpoint does not return valid JSON")
            
            # Test status endpoint response format
            response = self.session.get(f"{self.base_url}/status")
            if response.status_code == 200:
                try:
                    data = response.json()
                    if isinstance(data, list):
                        self.log_test("Response Format - Status List", True, "Status endpoint returns valid JSON list")
                    else:
                        self.log_test("Response Format - Status List", False, "Status endpoint does not return a list")
                except json.JSONDecodeError:
                    self.log_test("Response Format - Status List", False, "Status endpoint does not return valid JSON")
                    
        except Exception as e:
            self.log_test("Response Format", False, f"Error testing response format: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for The Lantern Fly Guys Website")
        print(f"🔗 Testing Backend URL: {self.base_url}")
        print("=" * 80)
        
        # Core API Tests
        self.test_root_endpoint()
        self.test_create_status_check()
        self.test_get_status_checks()
        
        # Database Tests
        self.test_database_connectivity()
        
        # Configuration Tests
        self.test_cors_headers()
        
        # Error Handling Tests
        self.test_api_error_handling()
        
        # Response Format Tests
        self.test_response_format()
        
        # Summary
        print("\n" + "=" * 80)
        print("📊 TEST SUMMARY")
        print("=" * 80)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result["success"])
        failed_tests = total_tests - passed_tests
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if failed_tests > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"  - {result['test']}: {result['details']}")
        
        return {
            "total": total_tests,
            "passed": passed_tests,
            "failed": failed_tests,
            "success_rate": (passed_tests/total_tests)*100,
            "results": self.test_results
        }

if __name__ == "__main__":
    tester = BackendTester()
    results = tester.run_all_tests()
    
    # Exit with error code if tests failed
    if results["failed"] > 0:
        sys.exit(1)
    else:
        print("\n🎉 All tests passed!")
        sys.exit(0)