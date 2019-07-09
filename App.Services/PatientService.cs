using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace App.Services
{
    public class PatientService : IPatientService
    {
        private ApplicationContext db;

        public PatientService(ApplicationContext context)
        {
            db = context;
        }

        public int CreatePatient(Patient patient)
        {
            patient.Guid = Guid.NewGuid();
            db.Patients.Add(patient);
            return db.SaveChanges();
        }

        public List<Patient> GetPatients()
        {
            return db.Patients.ToList();
        }
    }
}
