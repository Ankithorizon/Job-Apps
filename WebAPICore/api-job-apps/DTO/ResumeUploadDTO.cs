﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_job_apps.DTO
{
    public class ResumeUploadDTO
    {
        public int JobApplicationId { get; set; }
        public IFormFile ResumeFile { get; set; }
    }
}
