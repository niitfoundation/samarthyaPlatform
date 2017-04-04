const SECTION_TO_TOPIC_MAP = {
    PERSONAL_INFO: '',
    WORK_EXPERIENCE: 'workExperience',
    PROJECT: '',
    QUALIFICATION: '',
    JOB_PREFRENCE: '',
    SKILLS: ''
};
const KAFKA_HOST = 'localhost:9092';
const ZOOKPER_HOST = 'localhost:2181';
const CONSUMER_GROUP = 'SAMARTHYA';
const PROCESSOR_NAME = {
    personalinfo: 'PersonalInfoAnalyzer',
    workexperience: 'workExperienceAnalyzer',
    project: '',
    qualification: '',
    jobprefrences: '',
    skills: ''
}
module.exports = {
    SECTION_TO_TOPIC_MAP: SECTION_TO_TOPIC_MAP,
    KAFKA_HOST: KAFKA_HOST,
    CONSUMER_GROUP: CONSUMER_GROUP,
    ZOOKPER_HOST: ZOOKPER_HOST,
    PROCESSOR_NAME: PROCESSOR_NAME
};