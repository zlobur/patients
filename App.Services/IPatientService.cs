using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace App.Services
{
    public interface IPatientService
    {
        int CreatePatient(Patient patient);
        List<Patient> GetPatients();
    }
}
