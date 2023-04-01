import moment from 'moment';

export type checkIfEmptyProps = boolean | object | string | number;
export const checkIfEmpty = <T extends checkIfEmptyProps>(value: T) => {
  if (!value) return true;
  else {
    //here value can be string/object/number
    if (value instanceof Object) {
      //if value is either object or array
      if (value instanceof Array) {
        //if value is array
        if (value.length === 0) return true;
        else return false;
      } else {
        //if value is object
        if (Object.keys(value).length === 0) return true;
        else return false;
      }
    } else return false; //if string/number exist return false
  }
};

export const generateArray = (n: number): number[] => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  return arr;
};

export const getDate = (date: Date) => {
  return moment(date).format('LL');
};

export const getTime = (time: Date) => {
  return moment(time).format('LT');
};

type ValidationObject = {
  isValid: boolean;
  errorMessage: string
}

export const mobileNumbervalidation = (value: string): ValidationObject => {
  let validationObject = {
     isValid: true,
     errorMessage: ""
  }
  if (checkIfEmpty(value)) {
    validationObject = {
      isValid: false,
      errorMessage: 'Mobile Number cannot be empty.'
    }
  } else {
    let pattern = /^[6-9]\d{9}$/;
    if (!pattern.test(value)){
      validationObject = {
        isValid: false,
        errorMessage: 'Invalid Mobile Number.'
      }
    }
  }
  return validationObject;
};
