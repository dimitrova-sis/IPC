namespace IPC.UseCases.PersonUseCases.Commands
{
    using IPC.Domain.Aggregates;
    using MediatR;

    public class DeletePerson : IRequest<Person>
    {
        public Guid PersonId { get; set; }
    }
}
