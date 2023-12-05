# eMedScheduleWeb

## Project Description

eMedScheduleWeb is a web application developed at the end of the Academy of Programmers 2023 course. Its purpose is to organize and maintain a clinic's schedule of medical activities. The application allows you to schedule medical appointments and surgeries, managing doctors and their working hours efficiently.

## Demo

- [eMedScheduleWeb](https://ljoaolucasl.github.io/eMedScheduleWeb/login)

## Table of Contents

- [Features](#features)
  - [Doctor Module](#doctor-module)
    - [1.1 Register Doctor](#11-register-doctor)
    - [1.2 Edit Doctor](#12-edit-doctor)
    - [1.3 Delete Doctor](#13-delete-doctor)
    - [1.4 View All Doctors](#14-view-all-doctors)
    - [1.5 List Ranking of Doctors by Worked Hours](#15-list-ranking-of-doctors-by-worked-hours)
  - [Activities Module](#activities-module)
    - [2.1 Schedule Activity](#21-schedule-activity)
    - [2.2 Modify Existing Activity Schedule](#22-modify-existing-activity-schedule)
    - [2.3 Delete Existing Activity](#23-delete-existing-activity)
    - [2.4 Schedule Conflicts](#24-schedule-conflicts)

## Features

### Doctor Module

#### 1.1 Register Doctor

- The doctor's registration includes name and CRM.
- The CRM must consist of five digits followed by the state abbreviation (example, 78806-SP).
- The name must have a minimum of 3 characters.
- The name must not contain special characters.
- It is not possible to register a doctor with an existing CRM.

#### 1.2 Edit Doctor

- The validation criteria are the same as Requirement 1.1.

#### 1.3 Delete Doctor

- The doctor must not have scheduled activities to be deleted.

#### 1.4 View All Doctors

- Display: Id and Name of all registered doctors.

#### 1.5 List Ranking of Doctors by Worked Hours

- The application should show a list of doctors who worked the most hours within a period.

### Activities Module

#### 2.1 Schedule Activity

- It should be possible to indicate start and end times, activity date, type of activity, and responsible doctor(s).
- Recovery time should be calculated automatically based on the type of activity.
- It should be possible to schedule activities for any time (future or past).
- For Consultation, only one doctor should be allowed.
- For Surgery, it can be one or several doctors.

#### 2.2 Modify Existing Activity Schedule

- The user must be able to modify the schedules of an existing activity.

#### 2.3 Delete Existing Activity

- The user must be able to delete an existing activity.

#### 2.4 Schedule Conflicts

- The application should indicate conflicts when an activity overlaps with other activities of the same doctor.
- Users should be able to adjust schedules to resolve conflicts.

## Technologies Used

- Logic Programming
- Object-Oriented Programming
- HTML
- CSS
- TypeScript
- Angular Framework

## Getting Started

1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.
4. Run `ng serve` to start the development server.
5. Open your browser and go to `http://localhost:4200`.

## Developed by
- [@João Lucas Claudino](https://www.linkedin.com/in/joao-lucas-claudino/)
