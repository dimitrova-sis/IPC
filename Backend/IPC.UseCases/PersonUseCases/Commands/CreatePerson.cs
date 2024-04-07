namespace IPC.UseCases.PersonUseCases.Commands
{
    using IPC.Domain.Aggregates;
    using MediatR;

    public class CreatePerson : IRequest<Person>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string IBAN { get; set; }
    }
}
