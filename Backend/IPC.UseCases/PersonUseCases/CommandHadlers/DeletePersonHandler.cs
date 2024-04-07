namespace IPC.UseCases.PersonUseCases.CommandHadlers
{
    using IPC.DataLayer.Contracts;
    using IPC.Domain.Aggregates;
    using IPC.UseCases.PersonUseCases.Commands;
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Hosting;

    public class DeletePersonHandler : IRequestHandler<DeletePerson, Person>
    {
        private readonly IIPCCommand<Person> command;

        public DeletePersonHandler(IIPCCommand<Person> command)
        {
            this.command = command;
        }

        public async Task<Person> Handle(DeletePerson request, CancellationToken cancellationToken)
        {
            var person = await this.command.All()
                .FirstOrDefaultAsync(p => p.Id == request.PersonId, cancellationToken);

            if (person == null)
            {
                throw new Exception("Person not found!");
            }
           
            this.command.Delete(person);
            await this.command.SaveAsync();

            return person;
        }
    }
}
