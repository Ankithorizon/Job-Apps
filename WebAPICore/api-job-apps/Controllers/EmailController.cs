﻿using EmailService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_job_apps.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailSender _emailSender;

        public EmailController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [HttpGet]
        public async Task<string> Get()
        {
            var message = new Message(new string[] { "chicupatel202122@gmail.com" }, "Test email async", "This is the content from our async email.", null);
            await _emailSender.SendEmailAsync(message);

            return "Email Sent!";
        }

        // sending email with attachment files
        [HttpPost]
        [Route("sendEmailWithAttachment")]
        public async Task<string> Post()
        {
            var rng = new Random();

            var files = Request.Form.Files.Any() ? Request.Form.Files : new FormFileCollection();

            var message = new Message(new string[] { "chicupatel202122@gmail.com" }, "Test mail with Attachments", "This is the content from our mail with attachments.", files);
            await _emailSender.SendEmailAsync(message);

            return "Email sent with attachment-file!";
        }
    }
}