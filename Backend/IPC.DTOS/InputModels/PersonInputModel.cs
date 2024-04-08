namespace IPC.DTOs.InputModels
{
    using System.ComponentModel.DataAnnotations;

    public class PersonInputModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string IBAN { get; set; }
    }
}
