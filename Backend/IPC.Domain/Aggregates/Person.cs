using IPC.Domain.Validators;

namespace IPC.Domain.Aggregates
{
    public class Person
    {        
        public Guid Id { get; private set; }
        
        public string FirstName { get; private set; }
       
        public string LastName { get; private set; }
        
        public DateTime DateOfBirth { get; private set; }
        
        public string Address { get; private set; }
        
        public string PhoneNumber { get; private set; }
        
        public string IBAN { get; private set; }

        public DateTime CreatedDate { get; private set; }

        public DateTime LastModified { get; private set; }

        public static Person CreatePerson(string firstName, string lastName, DateTime dateOfBirth, string address,
            string iban, string phoneNumber)
        {
            var validator = new PersonValidator();

            var person = new Person
            {
                Id = Guid.NewGuid(),
                FirstName = firstName,
                LastName = lastName,
                DateOfBirth = dateOfBirth,
                Address = address,
                IBAN = iban,
                PhoneNumber = phoneNumber,

                CreatedDate = DateTime.UtcNow,
                LastModified = DateTime.UtcNow,
            };

            var validationResult = validator.Validate(person);

            if (!validationResult.IsValid)
            {
                throw new Exception("Person is not valid");
            }

            return person;
        }

    }
}
