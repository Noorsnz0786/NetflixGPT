export const validation = (fullname, mobilenumber, email, password) => {
  const isFullNameValid = /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(fullname);
  const isMobileNumberValid = /^\d{10}$/.test(mobilenumber);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
      password
    );

  if (!isFullNameValid) return "Full Name is not Valid";
  if (!isMobileNumberValid) return "Mobile Number is not Valid";
  if (!isEmailValid) return "Email id is not Valid";
  if (!isPasswordValid) return "Please use the minimum 8 Character with symbol and number";

  return null;
};
