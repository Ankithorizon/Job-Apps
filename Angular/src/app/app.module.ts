import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

////////components
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyToJobComponent } from './components/apply-to-job/apply-to-job.component';
import { FollowUpComponent } from './components/follow-up/follow-up.component';
import { UniversityWinnipegComponent } from './components/university-winnipeg/university-winnipeg.component';
import { JobAppEditDialogComponent } from './components/job-app-edit-dialog/job-app-edit-dialog.component';
import { JobAppViewDialogComponent } from './components/job-app-view-dialog/job-app-view-dialog.component';
import { JobAppDeleteDialogComponent } from './components/job-app-delete-dialog/job-app-delete-dialog.component';
import { JobResumeUploadComponent } from './components/job-resume-upload/job-resume-upload.component';
import { ResumeCreatorComponent } from './components/resume-creator/resume-creator.component';
import { AddWorkExperienceComponent } from './components/child-components/add-work-experience/add-work-experience.component';
import { EditWorkExperienceComponent } from './components/child-components/edit-work-experience/edit-work-experience.component';
import { PersonalInfoCreateComponent } from './components/child-components/personal-info-create/personal-info-create.component';
import { TechnicalSkillCreateComponent } from './components/child-components/technical-skill-create/technical-skill-create.component';
import { WorkExperienceCreateComponent } from './components/child-components/work-experience-create/work-experience-create.component';
import { SaveAndViewResumeComponent } from './components/child-components/save-and-view-resume/save-and-view-resume.component';
import { EducationCreateComponent } from './components/child-components/education-create/education-create.component';
import { AddEducationComponent } from './components/child-components/add-education/add-education.component';
import { EditEducationComponent } from './components/child-components/edit-education/edit-education.component';
import { AppStatusTrackDialogComponent } from './components/app-status-track-dialog/app-status-track-dialog.component';
import { ViewUserDataComponent } from './components/view-user-data/view-user-data.component';
import { ViewUserResumeEmailDataComponent } from './components/view-user-data/child-components/view-user-resume-email-data/view-user-resume-email-data.component';
import { ViewUserResumeCreateDataComponent } from './components/view-user-data/child-components/view-user-resume-create-data/view-user-resume-create-data.component';

////////services
import { LocalDataService } from './services/local-data.service';

// angular-material
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ApplyToJobComponent,
    FollowUpComponent,
    JobAppEditDialogComponent,
    UniversityWinnipegComponent,
    JobAppViewDialogComponent,
    JobAppDeleteDialogComponent,
    JobResumeUploadComponent,
    ResumeCreatorComponent,
    PersonalInfoCreateComponent,
    TechnicalSkillCreateComponent,
    WorkExperienceCreateComponent,
    SaveAndViewResumeComponent,
    EducationCreateComponent,
    AddWorkExperienceComponent,
    EditWorkExperienceComponent,
    AddEducationComponent,
    EditEducationComponent,
    AppStatusTrackDialogComponent,
    ViewUserDataComponent,
    ViewUserResumeEmailDataComponent,
    ViewUserResumeCreateDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [HttpClientModule, LocalDataService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
