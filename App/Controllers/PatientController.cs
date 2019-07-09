using System;
using System.Collections.Generic;
using System.Linq;
using App.Services;
using Microsoft.AspNetCore.Mvc;
using Models;
namespace App.Controllers
{
    [Route("api/patients")]
    public class PatientController : Controller
    {
        public IPatientService _patientService { get; set; }
        public PatientController(IPatientService service)
        {
            _patientService = service;

            if (!_patientService.GetPatients().Any())
            {
                Program.Logger.Info("Нет данных в бд. Добавил тестовое значение.");
                _patientService.CreatePatient(new Patient { FirstName = "Иван", LastName = "Иванов", BirthDate = DateTime.Parse("06.06.2006") });
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Patient patient)
        {
            if (ModelState.IsValid)
            {
                _patientService.CreatePatient(patient);
                Program.Logger.Info($" записали нового пациента в бд {patient.FirstName} {patient.LastName}");
                return Ok(patient);
            }
            return BadRequest(ModelState);
        }

        [HttpGet]
        public IEnumerable<Patient> Get()
        {
            Program.Logger.Info("Данные взяли");
            return _patientService.GetPatients();
        }
    }
}