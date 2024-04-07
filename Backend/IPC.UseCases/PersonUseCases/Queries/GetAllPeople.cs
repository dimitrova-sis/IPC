namespace IPC.UseCases.PersonUseCases.Queries
{
    using IPC.DTOs.ViewModels;
    using MediatR;

    public class GetAllPeople : IRequest<List<PersonListViewModel>>
    {
    }
}
