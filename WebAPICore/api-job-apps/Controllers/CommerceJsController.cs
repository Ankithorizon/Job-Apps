﻿using api_job_apps.DTO;
using CommerceJsService;
using CommerceJsService.Models;
using EFCore.Models;
using EmailService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ResumeService;
using ResumeService.Models;
using SelectPdf;
using Services.DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api_job_apps.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommerceJsController : ControllerBase
    {
        private APIResponse _response;

        private readonly ICommerceJsShopping _commerceJs;
        private readonly IEmailSender _emailSender;

        public CommerceJsController(ICommerceJsShopping commerceJs, IEmailSender emailSender)
        {
            _commerceJs = commerceJs;
            _emailSender = emailSender;
        }



        // create pdf resume as byte[] and display @ browser
        [HttpPost]
        [Route("createAndDownloadResume")]
        public IActionResult CreateAndDownloadResume(ShoppingData myShopping)
        {
            _response = new APIResponse();

            try
            {
                // throw new Exception();

                // instantiate a html to pdf converter object
                HtmlToPdf converter = _commerceJs.GetHtmlToPdfObject();

                // prepare data
                // incoming from react
                // Shopper Info
                ShopperInfo shopperInfo = new ShopperInfo();
                shopperInfo = myShopping.ShopperInfo;
                if (shopperInfo == null)
                {
                    _response.ResponseCode = -1;
                    _response.ResponseMessage = "Bad Request!";
                    return StatusCode(400, _response);
                }             

                var content = _commerceJs.GetPageHeader() +
                                _commerceJs.GetShopperInfoString(shopperInfo) +
                                _commerceJs.GetPageFooter();

                // create pdf as byte[] and display @ browser
                var pdf = converter.ConvertHtmlString(content);
                var pdfBytes = pdf.Save();

                // download to user's computer
                return File(pdfBytes, "application/pdf");
            }
            catch (Exception ex)
            {
                _response.ResponseCode = -1;
                _response.ResponseMessage = "Server Error!";
                return StatusCode(500, _response);
            }
        }
    }
}