namespace IPC.UseCases.PersonUseCases.QueryHandlers
{
    using IPC.DataLayer.Contracts;
    using IPC.Domain.Aggregates;
    using IPC.DTOs.ViewModels;
    using IPC.UseCases.PersonUseCases.Queries;
    using MediatR;
    using Microsoft.EntityFrameworkCore;

    internal class GetAllPeopleHandler : IRequestHandler<GetAllPeople, List<PersonListViewModel>>
    {
        private readonly IIPCQuery<Person> query;

        public GetAllPeopleHandler(IIPCQuery<Person> query)
        {
            this.query = query;
        }

        public async Task<List<PersonListViewModel>> Handle(GetAllPeople request, CancellationToken cancellationToken)
        {
            var people = await this.query.All()
                .Select(p => new PersonListViewModel
                {
                    Id = p.Id,
                    FirstName = p.FirstName,
                    LastName = p.LastName,
                    DateOfBirth = p.DateOfBirth,
                    IBAN = p.IBAN,
                    Address = p.Address,
                    PhoneNumber = p.PhoneNumber,
                })
                .ToListAsync();

            return people;
        }
    }
}
