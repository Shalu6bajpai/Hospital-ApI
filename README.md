
# Hospital-API

An API to keep track of covid-19 patients and also generate report.This can be helpful of hospital people and govt to keep track of patients 
## Task:
There can be 2 types of ​ Users
- *Doctors* & *Patients*

- Doctors can log in

- Each time a patient visits, the doctor will follow 2 steps:
    - Register​ the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
    - After the checkup, create a ​Report.
- Patient Report will have the following fields
    - Created by doctor
    - Status: Can be either of: *[Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]*
    - Date


# How to set it up ?

1. Clone the Package to your local System
2. Go to required Directory
3.Install node and mongoose if you not installed.
3. Open Terminal and type `npm install`
4. Type ` nodemon index.js` || `npm start`
5. Open browser or postman app  and goto `localhost:8000`

# Different API's in this project:
1) **/doctors/register** → Registers a new Doctor to the hospital Database. Takes in mandatory field:--> **email**, **name** and **password**
2) **/doctors/login** → Doctor Login. if Authenticated, Returns the JSON Web token, takes in mandatory **email** and **password**

### Protected routes
3) **/patients/register** → API to register a new Patient. Only authorized doctor can create a new Patient. Takes some mandatory information :--> **phone**, **name**, **password**
4) **/patients/:id/create_report** → API to create a report for the Patient with ID. Need **Status** to get passed in body.

### Unprotected routes
5) **/patients/:id/all_reports** → To Show all the reports of a particular Patient with *id*.
6) **/reports/:status** → To Show all the reports in the database with a particular status lets say *Positive* or *Negative* Or *Quarantined* etc.

# Folder Structure
- **Entry point** : index.js.
- **config** : Contains configuration files of Mongoose and Passport JWT Strategies.
- **controllers** : The controllers for various urls like Doctor API or Patient API or Report API.
- **models** : Mongoose Models for the Doctors, Patients and reports!
- **routes** : Different routes for different request urls.
- **views** : Not have any view for this project.
