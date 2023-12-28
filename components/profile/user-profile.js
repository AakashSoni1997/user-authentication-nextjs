import classes from "../style/user-profile.module.css";
import ProfileForm from "./profile-form";

function UserProfile() {
  async function changePasswordHandler(passwordData) {
    const res = await fetch(`/api/user/change-password`, {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("data", data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
