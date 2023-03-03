export default function validateInfo(values) {
  let errors = {};

  if (!values.username) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "Number is required";
  } else if (!values.phone.length === 11) {
    errors.phone = "Phone Number needs to be 11 characters";
  }
  if (!values.date) {
    errors.date = "Date is required";
  }
  if (!values.time) {
    errors.time = "Time is required";
  }
  if (!values.people) {
    errors.people = " People is required";
  }
  if (!values.message) {
    errors.message = "Message is required";
  } else if (values.message.length < 10) {
    errors.message = "Message needs to be 10 characters";
  }
  return errors;
}
