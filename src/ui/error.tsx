import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"

interface errorProps {
  hideError?: boolean
  message?: string
  errors?: { [key: string]: React.ReactNode }
}

const fieldNames = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password",
}

export default function Error({ errors, message, hideError }: errorProps) {
  function renderErrors(errors) {
    return Object.keys(errors).map((key) => {
      let element
      // If the error is for the password field, display a list of issues
      if (key === "password") {
        element = (
          <ul className={`list-disc ps-5`}>
            {errors[key].map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )
      } else {
        element = <span>{errors[key]}</span>
      }
      return (
        <li key={key}>
          <span className={`font-semibold`}>{fieldNames[key]}: </span>
          {element}
        </li>
      )
    })
  }

  // TODO: fix formatting on error modal
  return (
    <>
      <div
        className={clsx(
          `visible mb-10 flex w-auto flex-col items-center justify-start gap-2 rounded-md border-2 border-red-500 p-4 text-base`,
          {
            hidden: hideError,
          },
        )}
      >
        <div
          className={`align-center flex w-full flex-row justify-start gap-2`}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            size="lg"
            className={`text-red-500`}
          />
          {
            // Show Form Errors Title if any
            errors && <p className={`font-bold text-red-500`}>Form Errors:</p>
          }
          {
            // Show Error Message Title if any
            message && <p className={`font-bold text-red-500`}>Error:</p>
          }
        </div>
        {
          // Show form errors if any
          errors && (
            <ul className={`list-disc ps-5 text-sm text-red-500`}>
              {renderErrors(errors)}
            </ul>
          )
        }
        {
          // Show error message if any
          message && (
            <p className={`w-full text-start text-sm text-red-500`}>
              {message}
            </p>
          )
        }
      </div>
      {!hideError && <br />}
    </>
  )
}
