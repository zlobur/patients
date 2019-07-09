using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Patient
    {
        public int Id { get; set; }
        [StringLength(150, ErrorMessage = "Длина не должна превышать 150 символов")]
        public string FirstName { get; set; }
        [StringLength(150, ErrorMessage = "Длина не должна превышать 150 символов")]
        public string LastName { get; set; }
        [Range(typeof(DateTime), "01/01/1800", "06/06/2079", ErrorMessage = "Год должен быть больше 1800")]
        public DateTime BirthDate { get; set; }
        public Guid Guid { get; set; }
    }
}
