namespace IPC.UseCases.PersonUseCases.CommandHadlers
{
    using IPC.DataLayer.Contracts;
    using IPC.Domain.Aggregates;
    using IPC.UseCases.PersonUseCases.Commands;
    using MediatR;
    using Microsoft.EntityFrameworkCore;

    public class UpdatePersonHandler : IRequestHandler<UpdatePerson, Person>
    {
        private readonly IIPCCommand<Person> command;

        public UpdatePersonHandler(IIPCCommand<Person> command)
        {
            this.command = command;
        }

        public async Task<Person> Handle(UpdatePerson request, CancellationToken cancellationToken)
        {
            var person = await this.command.All()
               .FirstOrDefaultAsync(p => p.Id == request.Id, cancellationToken);

            if (person == null)
            {
                throw new Exception("Person not found!");
            }

            person.UpdatePerson(request.FirstName, request.LastName, request.DateOfBirth, request.Address,
                request.IBAN, request.PhoneNumber);

            await this.command.SaveAsync();

            return person;
        }
    }
}
