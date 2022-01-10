
class AppUrl{
    //static BaseUrl = 'http://10.10.10.117/VisaCovidCenterDevelopment/public/';
    static BaseUrl = 'http://192.168.31.150/VisaCovidCenterDevelopment/public/';
    // static BaseUrl = 'https://visacovid.xyz/';
    // static BaseUrl = 'http://visacovid.com/';


    static VolunteerLogin = this.BaseUrl+'api/volunteer/login';
    static VolunteerOtpCheck = this.BaseUrl+'api/volunteer/otp';
    static VolunteerOtpResend = this.BaseUrl+'api/volunteer/otpResend';

    //otp process
    static OtpSend = this.BaseUrl+'api/centerOptSend';
    static OtpCheck = this.BaseUrl+'api/centerOptCheck';

    //pcr process
    static PcrRegisteredList = this.BaseUrl+'api/pcr/registeredList';
    static PcrUserOtp = this.BaseUrl+'api/pcr/pcrUserOtp';
    static PcrVolunteerOtp = this.BaseUrl+'api/pcr/pcrVolunteerOtp';
    static PcrFrom = this.BaseUrl+'api/pcr/pcrFrom';

    //booster process
    static BoosterRegisteredList = this.BaseUrl+'api/booster/registeredList';
    static BoosterUserOtp = this.BaseUrl+'api/booster/boosterUserOtp';
    static BoosterVolunteerOtp = this.BaseUrl+'api/booster/boosterVolunteerOtp';
    static BoosterFrom = this.BaseUrl+'api/booster/boosterFrom';


    //Vaccination process
    static VaccinationRegisteredFirstList = this.BaseUrl+'api/vaccination/registeredFirstList';
    static VaccinationRegisteredSecondList = this.BaseUrl+'api/vaccination/registeredSecondList';
    static VaccinationUserOtp = this.BaseUrl+'api/vaccination/vaccinationUserOtp';
    static VaccinationVolunteerOtp = this.BaseUrl+'api/vaccination/vaccinationVolunteerOtp';
    static VaccinationFrom = this.BaseUrl+'api/vaccination/vaccinationFrom';





}

export default AppUrl;
