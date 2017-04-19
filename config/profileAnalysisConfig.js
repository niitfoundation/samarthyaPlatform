const SECTION_TO_TOPIC_MAP = {
    PERSONAL_INFO: 'personalInfo',
    WORK_EXPERIENCE: 'experiences',
    PROJECTS: 'projects',
    QUALIFICATION: 'qualifications',
    JOB_PREFRENCE: 'jobPreferences',
    SKILLS: 'skills',
    USER_REG: 'userRegistration'
};

const CONSUMER_GROUP = {
    USER_REGISTRATION: 'Samarthya_User_Registration',
    PERSONAL_INFO: 'Samarthya_Personal_info',
    WORK_EXPERIENCE: 'Samarthya_work_Experience',
    PROJECTS: 'Samarthya_project',
    QUALIFICATION: 'Samarthya_qualification',
    JOB_PREFRENCE: 'Samarthya_jobprefrences',
    SKILLS: 'Samarthya_skills',
    USER_REG: 'Samarthya_User_Reg'

}
const PROCESSOR_NAME = {
    USER_REGISTRATION: 'Samarthya_User_Registration',
    PERSONAL_INFO: 'PersonalInfoAnalyzer',
    WORK_EXPERIENCE: 'workExperienceAnalyzer',
    PROJECTS: 'projectAnalyzer',
    QUALIFICATION: 'qualificationAnalyzer',
    JOB_PREFRENCE: 'jobprefrencesAnalyzer',
    SKILLS: 'skillsAnalyzer'
}
module.exports = {
    SECTION_TO_TOPIC_MAP: SECTION_TO_TOPIC_MAP,
    CONSUMER_GROUP: CONSUMER_GROUP,
    PROCESSOR_NAME: PROCESSOR_NAME
};