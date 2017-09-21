const data = {
  "navList": {
    "Admin": [{
        "name": "Coordinators",
        "path": "/home/register/Admin",
        "icon": "supervisor_account"
      },
      {
        "name": "Import",
        "path": "/home/import",
        "icon": "import_export"
      },
      {
        "name": "Placement Centers",
        "path": "/home/register",
        "icon": "location_searching"
      },
      {
        "name": "Search Candidate",
        "path": "/home/candidateSearch",
        "icon": "search"
      },
      {
        "name": "Events",
        "path": "/home/eventPost",
        "icon": "event"
      },
      {
        "name": "Job Post",
        "path": "/home/jobPost",
        "icon": "card_travel"
      },
      {
        "name": "About Us",
        "path": "/home/aboutUs",
        "icon": "feedback"
      },
      {
        "name": "Home",
        "path": "/home",
        "icon": "home"
      }
    ],
    "coordinator": [{
        "name": "Import",
        "path": "/home/import",
        "icon": "import_export"
      },
      {
        "name": "Search Candidate",
        "path": "/home/candidateSearch",
        "icon": "search"
      },
      {
        "name": "Events",
        "path": "/home/eventPost",
        "icon": "event"
      },
      {
        "name": "Job Post",
        "path": "/home/jobPost",
        "icon": "card_travel"
      },
      {
        "name": "Location",
        "path": "/home/locations",
        "icon": "add_location"
      },
      {
        "name": "Profession",
        "path": "/home/professions",
        "icon": "work"
      },
      {
        "name": "Qualification",
        "path": "/home/qualifications",
        "icon": "feedback"
      },
      {
        "name": "Skills",
        "path": "/home/skills",
        "icon": "feedback"
      },
      {
        "name": "Job Role",
        "path": "/home/roles",
        "icon": "feedback"
      },
      {
        "name": "Languages",
        "path": "/home/languages",
        "icon": "language"
      },
      {
        "name": "Centres",
        "path": "/home/centres",
        "icon": "business_center"
      },
      {
        "name": "About Us",
        "path": "/home/aboutUs",
        "icon": "feedback"
      },
      {
        "name": "Home",
        "path": "/home",
        "icon": "home"
      }
    ],
    "supervisor": [{
        "name": "Import",
        "path": "/home/import",
        "icon": "import_export"
      },
      {
        "name": "Search Coordinator",
        "path": "/home/candidateSearch",
        "icon": "search"
      },
      {
        "name": "Location",
        "path": "/home/locations",
        "icon": "add_location"
      },
      {
        "name": "Profession",
        "path": "/home/professions",
        "icon": "work"
      },
      {
        "name": "Qulification",
        "path": "/home/qualifications",
        "icon": "feedback"
      },
      {
        "name": "Skills",
        "path": "/home/skills",
        "icon": "feedback"
      },
      {
        "name": "Job Role",
        "path": "/home/roles",
        "icon": "feedback"
      },
      {
        "name": "Languages",
        "path": "/home/languages",
        "icon": "language"
      },
      {
        "name": "Centres",
        "path": "/home/centres",
        "icon": "business_center"
      },
      {
        "name": "About Us",
        "path": "/home/aboutUs",
        "icon": "feedback"
      },
      {
        "name": "Home",
        "path": "/home",
        "icon": "home"
      }
    ],
    "candidate": [{
        "name": "Dashboard",
        "path": "/home",
        "icon": "dashboard"
      },
      {
        "name": "About Us",
        "path": "/home/aboutUs",
        "icon": "domain"
      }
    ]
  },
  "profileSectionViewConfig": {
    "summary": {
      "fields": [{
        "elemType": "largeText",
        "elemName": "name",
        "elemLabel": "Name",
        "block": 1,
        "elemOrder": 1,
        "dataDescriptor": {
          "dataFieldName": "summaryText",
          "backupText": "Add Somthing about yourself..............."
        }
      }]
    },
    "personalInfo": {
      "fields": [{
          "elemType": "icon-div",
          "elemName": "name",
          "elemLabel": "Name",
          "block": 1,
          "elemOrder": 1,
          "dataDescriptor": {
            "dataFieldName": "name",
            "icon": "person",
            "info": "Your Full Name"
          }
        },
        {
          "elemType": "icon-div",
          "elemName": "dob",
          "elemLabel": "Date of Birth",
          "elemOrder": 1,
          "block": 2,
          "dataDescriptor": {
            "dataFieldName": "dob",
            "icon": "cake",
            "info": "BirthDay"
          }
        },
        {
          "elemType": "icon-div",
          "elemName": "email",
          "elemLabel": "E-Mail",
          "elemOrder": 1,
          "block": 2,
          "dataDescriptor": {
            "dataFieldName": "email",
            "icon": "email",
            "info": "Your Primary Email Address"
          }
        },
        {
          "elemType": "icon-div",
          "elemName": "altemail",
          "elemLabel": "Alternate E-Mail",
          "elemOrder": 3,
          "block": 2,
          "dataDescriptor": {
            "dataFieldName": "altemail",
            "icon": "email",
            "info": "Your Alternate Email Address"
          }
        },
        {
          "elemType": "icon-div",
          "elemName": "phone",
          "elemLabel": "Phone number",
          "elemOrder": 3,
          "block": 1,
          "dataDescriptor": {
            "dataFieldName": {
              "type": "nested",
              "fields": [
                "contact",
                "I"
              ]
            },
            "icon": "phone",
            "info": "Contact number"
          }
        },
        {
          "elemType": "icon-div",
          "elemName": "altephone",
          "elemLabel": "Alternate Phone number",
          "elemOrder": 3,
          "block": 2,
          "dataDescriptor": {
            "dataFieldName": {
              "type": "nestedArrey",
              "fields": [
                "contact",
                "II"
              ]
            },
            "icon": "phone",
            "info": "Alternate Contact number"
          }
        },
        {
          "elemType": "icon-div",
          "elemOrder": 3,
          "block": 2,
          "dataDescriptor": {
            "dataFieldName": {
              "type": "nestedArrey",
              "fields": [
                "identity",
                0,
                "value"
              ]
            },
            "icon": "chrome_reader_mode",
            "info": "Aadhaar No."
          }
        },
        {
          "elemType": "icon-div",
          "elemOrder": 3,
          "block": 2,
          "dataDescriptor": {
            "dataFieldName": {
              "type": "nestedArrey",
              "fields": [
                "identity",
                1,
                "value"
              ]
            },
            "icon": "assignment_ind",
            "info": "Registration ID"
          }
        },
        {
          "elemType": "title-div",
          "elemOrder": 1,
          "dataDescriptor": {
            "dataFieldName": "prefLang",
            "title": "Preferred Language",
            "info": "Your Preferred Language"
          }
        },
        {
          "elemType": "title-div",
          "elemOrder": 1,
          "dataDescriptor": {
            "dataFieldName": "nativeLang",
            "title": "Native Language",
            "info": "Your Nativ Language"
          }
        },
        {
          "elemType": "listColl",
          "elemName": "address",
          "elemLabel": "Address",
          "elemOrder": 1,
          "dataDescriptor": {
            "dataFieldName": {
              "type": "collObj",
              "location": "address",
              "title": "Address",
              "fields": [
                "address1",
                "address2",
                "landmark",
                "district",
                "state",
                "pincode"
              ]
            }
          }
        }
      ]
    },
    "jobPreferences": {
      "fields": [{
          "elemType": "chips",
          "elemName": "name",
          "elemLabel": "Name",
          "elemOrder": 1,
          "dataDescriptor": {
            "dataFieldName": "looking",
            "info": "Job Looking Status"
          }
        },
        {
          "elemType": "listColl",
          "elemName": "lang",
          "elemLabel": "Lang",
          "elemOrder": 1,
          "dataDescriptor": {
            "dataFieldName": {
              "type": "nestedCollArray",
              "location": "jobRoles",
              "title": "JobRoles",
              "fields": [
                "name",
                "engagement",
                "availablefrom"
              ]
            }
          }
        }
      ]
    },
    "skills": {
      "fields": [{
        "elemType": "chipsColl",
        "elemName": "name",
        "elemLabel": "Name",
        "elemOrder": 1,
        "dataDescriptor": {
          "dataFieldName": {
            "type": "collArray",
            "fields": [
              "name",
              "experience"
            ]
          }
        }
      }]
    },
    "qualifications": {
      "fields": [{
        "elemType": "listColl",
        "elemName": "name1",
        "elemLabel": "Qualification Name",
        "elemOrder": 1,
        "dataDescriptor": {
          "dataFieldName": {
            "type": "collArray",
            "fields": [
              "name",
              "subject",
              "academictype",
              "batch",
              "institute",
              "affiliation",
              "location"
            ]
          }
        }
      }]
    },
    "experiences": {
      "fields": [{
        "elemType": "listColl",
        "elemName": "name1",
        "elemLabel": "Experience",
        "elemOrder": 1,
        "dataDescriptor": {
          "dataFieldName": {
            "type": "collArray",
            "fields": [
              "workplace",
              "designation",
              "role",
              "location"
            ]
          }
        }
      }]
    },
    "projects": {
      "fields": [{
        "elemType": "listColl",
        "elemName": "name1",
        "elemLabel": "projects",
        "elemOrder": 1,
        "dataDescriptor": {
          "dataFieldName": {
            "type": "collArray",
            "fields": [
              "name",
              "role",
              "skill",
              "location",
              "jobRole"
            ]
          }
        }
      }]
    }
  }
}
module.exports = {
  data: data
};
