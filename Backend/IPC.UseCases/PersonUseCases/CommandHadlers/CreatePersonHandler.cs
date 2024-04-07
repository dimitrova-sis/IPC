namespace IPC.UseCases.PersonUseCases.CommandHadlers
{
    using IPC.DataLayer.Contracts;
    using IPC.Domain.Aggregates;
    using IPC.UseCases.PersonUseCases.Commands;
    using MediatR;

    public class CreatePersonHandler : IRequestHandler<CreatePerson, Person>
    {
        private readonly IIPCCommand<Person> command;

        public CreatePersonHandler(IIPCCommand<Person> command)
        {
            this.command = command;
        }

        public async Task<Person> Handle(CreatePerson request, CancellationToken cancellationToken)
        {
            var person = Person.CreatePerson(request.FirstName, request.LastName, request.DateOfBirth, request.Address,
                request.IBAN, request.PhoneNumber);

            this.command.Add(person);
            await this.command.SaveAsync();

            return person;
        }
    }
}
