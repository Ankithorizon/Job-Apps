﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ResumeService.Models
{
    public class MyResume
    {
        public PersonalInfo PersonalInfo { get; set; }
        public List<string> Skills { get; set; }
        public List<WorkExperience> WorkExperience { get; set; }
    }
}