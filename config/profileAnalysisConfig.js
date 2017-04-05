const SECTION_TO_TOPIC_MAP = {
    PERSONAL_INFO: 'personalInfo',
    WORK_EXPERIENCE: 'workExperience',
    PROJECT: 'projects',
    QUALIFICATION: 'qualification',
    JOB_PREFRENCE: 'jobPreference',
    SKILLS: 'skills'
};

const CONSUMER_GROUP = 'SAMARTHYA_App';
const PROCESSOR_NAME = {
    PERSONAL_INFO: 'PersonalInfoAnalyzer',
    WORK_EXPERIENCE: 'workExperienceAnalyzer',
    PROJECT: 'projectAnalyzer',
    QUALIFICATION: 'qualificationAnalyzer',
    JOB_PREFRENCE: 'jobprefrencesAnalyzer',
    SKILLS: 'skillsAnalyzer'
}
module.exports = {
    SECTION_TO_TOPIC_MAP: SECTION_TO_TOPIC_MAP,
    CONSUMER_GROUP: CONSUMER_GROUP,
    PROCESSOR_NAME: PROCESSOR_NAME
};