const logger = require('./../../../../applogger');
const data =
{
    navList: {
        Admin: [
            {
                name: 'Home',
                path: '/home',
                icon: 'home'
            },
            {
                name: 'Coordinators',
                path: '/home/register/Admin',
                icon: 'supervisor_account'
            },
            {
                name: 'Import',
                path: '/home/register',
                icon: 'import_export'
            },
            {
                name: 'Placement Centers',
                path: '/home/register',
                icon: 'location_searching'
            },
            {
                name: 'Search Candidate',
                path: '/home/candidateSearch',
                icon: 'search'
            },
            {
                name: 'Events',
                path: '/home/eventPost',
                icon: 'event'
            },
            {
                name: 'Job Post',
                path: '/home/jobPost',
                icon: 'card_travel'
            },
            {
                name: 'About Us',
                path: '/home/aboutUs',
                icon: 'feedback'
            }
        ],
        coordinator: [
            {
                name: 'Home',
                path: '/home',
                icon: 'home'
            },
            {
                name: 'Placement Centers',
                path: '/home/register',
                icon: 'location_searching'
            },
            {
                name: 'Search Candidate',
                path: '/home/candidateSearch',
                icon: 'search'
            },
            {
                name: 'Events',
                path: '/home/eventPost',
                icon: 'event'
            },
            {
                name: 'Job Post',
                path: '/home/jobPost',
                icon: 'card_travel'
            },
            {
                name: 'About Us',
                path: '/home/aboutUs',
                icon: 'feedback'
            }
        ],
        supervisor: [
            {
                name: 'Home',
                path: '/home',
                icon: 'home'
            },
            {
                name: 'Placement Centers',
                path: '/home/register',
                icon: 'location_searching'
            },
            {
                name: 'Search Coordinator',
                path: '/home/candidateSearch',
                icon: 'search'
            },
            {
                name: 'About Us',
                path: '/home/aboutUs',
                icon: 'feedback'
            }
        ],
        candidate: [
            {
                name: 'Dashboard',
                path: '/home',
                icon: 'dashboard'
            },
            {
                name: 'Events',
                path: '/home/eventPost',
                icon: 'assignment'
            },
            {
                name: 'Job Post',
                path: '/home/jobPost',
                icon: 'mood'
            },
            {
                name: 'About Us',
                path: '/home/aboutUs',
                icon: 'domain'
            }
        ]
    },
    languages: [
        {
            code: 'en',
            name: 'English',
            nativeName: 'English'
        },
        {
            code: 'hi',
            name: 'Hindi',
            nativeName: 'हिन्दी'
        },
        {
            code: 'pa',
            name: 'Panjabi',
            nativeName: 'ਪੰਜਾਬੀ'
        },
        {
            code: 'bn',
            name: 'Bengali',
            nativeName: 'বাংলা'
        },
        {
            code: 'gu',
            name: 'Gujarati',
            nativeName: 'ગુજરાતી'
        },
        {
            code: 'ml',
            name: 'Malayalam',
            nativeName: 'മലയാളം'
        },
        {
            code: 'mr',
            name: 'Marathi',
            nativeName: 'मराठी'
        },
        {
            code: 'kn',
            name: 'Kannada',
            nativeName: 'ಕನ್ನಡ'
        },
        {
            code: 'sd',
            name: 'Sindhi',
            nativeName: 'سنڌي'
        },
        {
            code: 'ta',
            name: 'Tamil',
            nativeName: 'தமிழ்'
        },
        {
            code: 'ur',
            name: 'Urdu',
            nativeName: 'اردو'
        },
        {
            code: 'sa',
            name: 'Sanskrit',
            nativeName: 'संस्कृतम्'
        },
        {
            code: 'te',
            name: 'Telugu',
            nativeName: 'తెలుగు'
        }
    ],
    profession: [
        {
            name: 'BPO',
            value: 'bpo'
        },
        {
            name: 'Full Stack Developer',
            value: 'full Stack developer'
        },
        {
            name: 'Civil Aviation',
            value: 'civil aviation'
        },
        {
            name: 'Retail',
            value: 'retail'
        },
        {
            name: 'Logistic Coordinator',
            value: 'logistic'
        }
    ],
    locations: [
        {
            name: 'Electronic City',
            value: 'electronicCity'
        },
        {
            name: 'Koramangla',
            value: 'koramangla'
        },
        {
            name: 'Whitefield',
            value: 'whitefield'
        },
        {
            name: 'Pune',
            value: 'pune'
        }
    ],
    placementCenter: [
        {
            name: 'Banglore',
            value: 'bangalore'
        },
        {
            name: 'Pune',
            value: 'pune'
        },
        {
            name: 'NIIT',
            value: 'niit'
        }
    ],
    profileSectionViewConfig: {
        summary: {
            fields: [
                {
                    elemType: 'largeText',
                    elemName: 'name',
                    elemLabel: 'Name',
                    block: 1,
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: 'summaryText',
                        backupText: 'Add Somthing about yourself...............'
                    }
                }
            ]
        },
        personalInfo: {
            fields: [
                {
                    elemType: 'icon-div',
                    elemName: 'name',
                    elemLabel: 'Name',
                    block: 1,
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: 'name',
                        icon: 'person',
                        info: 'Your Full Name'
                    }
                },
                {
                    elemType: 'icon-div',
                    elemName: 'dob',
                    elemLabel: 'Date of Birth',
                    elemOrder: 1,
                    block: 2,
                    dataDescriptor: {
                        dataFieldName: 'dob',
                        icon: 'cake',
                        info: 'BirthDay'
                    }
                },
                {
                    elemType: 'icon-div',
                    elemName: 'email',
                    elemLabel: 'E-Mail',
                    elemOrder: 1,
                    block: 2,
                    dataDescriptor: {
                        dataFieldName: 'email',
                        icon: 'email',
                        info: 'Your Primary Email Address'
                    }
                },
                {
                    elemType: 'icon-div',
                    elemName: 'altemail',
                    elemLabel: 'Alternate E-Mail',
                    elemOrder: 3,
                    block: 2,
                    dataDescriptor: {
                        dataFieldName: 'altemail',
                        icon: 'email',
                        info: 'Your Alternate Email Address'
                    }
                },
                {
                    elemType: 'icon-div',
                    elemName: 'phone',
                    elemLabel: 'Phone number',
                    elemOrder: 3,
                    block: 1,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'nested',
                            fields: [
                                'contact',
                                'I'
                            ]
                        },
                        icon: 'phone',
                        info: 'Contact number'
                    }
                },
                {
                    elemType: 'icon-div',
                    elemName: 'altephone',
                    elemLabel: 'Alternate Phone number',
                    elemOrder: 3,
                    block: 2,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'nestedArrey',
                            fields: [
                                'contact',
                                'II'
                            ]
                        },
                        icon: 'phone',
                        info: 'Alternate Contact number'
                    }
                },
                {
                    elemType: 'icon-div',
                    elemOrder: 3,
                    block: 2,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'nestedArrey',
                            fields: [
                                'identity',
                                0,
                                'value'
                            ]
                        },
                        icon: 'chrome_reader_mode',
                        info: 'Aadhaar No.'
                    }
                },
                {
                    elemType: 'icon-div',
                    elemOrder: 3,
                    block: 2,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'nestedArrey',
                            fields: [
                                'identity',
                                1,
                                'value'
                            ]
                        },
                        icon: 'assignment_ind',
                        info: 'Registration ID'
                    }
                },
                {
                    elemType: 'title-div',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: 'prefLang',
                        title: 'Preferred Language',
                        info: 'Your Preferred Language'
                    }
                },
                {
                    elemType: 'title-div',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: 'nativeLang',
                        title: 'Native Language',
                        info: 'Your Nativ Language'
                    }
                },
                {
                    elemType: 'listColl',
                    elemName: 'address',
                    elemLabel: 'Address',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'collObj',
                            location: 'address',
                            title: 'Address',
                            fields: [
                                'address1',
                                'address2',
                                'landmark',
                                'district',
                                'state',
                                'pincode'
                            ]
                        }
                    }
                }
            ]
        },
        jobPreferences: {
            fields: [
                {
                    elemType: 'chips',
                    elemName: 'name',
                    elemLabel: 'Name',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: 'looking',
                        info: 'Job Looking Status'
                    }
                },
                {
                    elemType: 'listColl',
                    elemName: 'lang',
                    elemLabel: 'Lang',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'nestedCollArray',
                            location: 'jobRoles',
                            title: 'JobRoles',
                            fields: [
                                'name',
                                'engagement',
                                'availablefrom'
                            ]
                        }
                    }
                }
            ]
        },
        skills: {
            fields: [
                {
                    elemType: 'chipsColl',
                    elemName: 'name',
                    elemLabel: 'Name',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'collArray',
                            fields: [
                                'name',
                                'experience'
                            ]
                        }
                    }
                }
            ]
        },
        qualifications: {
            fields: [
                {
                    elemType: 'listColl',
                    elemName: 'name1',
                    elemLabel: 'Qualification Name',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'collArray',
                            fields: [
                                'name',
                                'subject',
                                'academictype',
                                'batch',
                                'institute',
                                'affiliation',
                                'location'
                            ]
                        }
                    }
                }
            ]
        },
        experiences: {
            fields: [
                {
                    elemType: 'listColl',
                    elemName: 'name1',
                    elemLabel: 'Experience',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'collArray',
                            fields: [
                                'workplace',
                                'designation',
                                'role',
                                'location'
                            ]
                        }
                    }
                }
            ]
        },
        projects: {
            fields: [
                {
                    elemType: 'listColl',
                    elemName: 'name1',
                    elemLabel: 'projects',
                    elemOrder: 1,
                    dataDescriptor: {
                        dataFieldName: {
                            type: 'collArray',
                            fields: [
                                'name',
                                'role',
                                'skill',
                                'location',
                                'jobRole'
                            ]
                        }
                    }
                }
            ]
        }
    }
};


module.exports = {
    data: data
};
