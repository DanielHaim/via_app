const removeSpace = str => str.replace(/\s+/g, '');
const removeNoAlphaNumeric = str => str.replace(/[^0-9]/g, "");
const dotPhoneNum = str => str.slice(0,3) + '.' + str.slice(3,6) + '.' + str.slice(6);

export const formatPhoneNumber = (phoneNum) => {
    if(phoneNum){
        phoneNum = removeSpace(phoneNum);
        phoneNum = removeNoAlphaNumeric(phoneNum);
        phoneNum = dotPhoneNum(phoneNum);
        return phoneNum;
    }
    return 'undefined';
}

export const formatEmail = (email) => {
    if(email){
        email = removeSpace(email);
        return email;
    }
    return 'undefined';
}

export const formatDriverTypeUrl = (driverType) => {
    if(driverType){
        driverType = removeSpace(driverType);
        driverType = driverType.toLowerCase() === "citizen" 
                        ? require('../../assets/svg/citizen.svg') 
                        : require('../../assets/svg/professional.svg')
        return driverType
    }
}