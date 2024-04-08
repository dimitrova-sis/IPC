namespace IPC.Web.Controllers
{
    using IPC.Domain.Aggregates;
    using IPC.DTOs.InputModels;
    using IPC.UseCases.PersonUseCases.Commands;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading;
    using IPC.UseCases.PersonUseCases.Queries;

    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private IMediator _mediatorInstance;
        protected IMediator _mediator => _mediatorInstance ??= HttpContext.RequestServices.GetService<IMediator>();

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var dob = new DateTime(1983, 04, 13);
            var person = Person.CreatePerson("Sis", "LastName", dob, "My town", "", "");
            return Ok(person);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetAllPeople(), cancellationToken);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody] PersonInputModel model, CancellationToken cancellationToken)
        {
            var command = new CreatePerson()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                DateOfBirth = model.DateOfBirth,
                IBAN = model.IBAN,
                Address = model.Address,
                PhoneNumber = model.PhoneNumber,
            };

            var result = await _mediator.Send(command, cancellationToken);

            return Ok(result);
        }

        [HttpPatch]
        [Route("{id}")]
        public async Task<IActionResult> UpdateAsync(string id, [FromBody] PersonInputModel model, CancellationToken cancellationToken)
        {
            var command = new UpdatePerson()
            {
                Id = Guid.Parse(id),
                FirstName = model.FirstName,
                LastName = model.LastName,
                DateOfBirth = model.DateOfBirth,
                IBAN = model.IBAN,
                Address = model.Address,
                PhoneNumber = model.PhoneNumber,
            };

            var result = await _mediator.Send(command, cancellationToken);

            return Ok(result);
        }

        [HttpDelete]
        [Route("{id}")]       
        public async Task<IActionResult> DeleteAsync(string id, CancellationToken cancellationToken)
        {   
            var command = new DeletePerson() { PersonId = Guid.Parse(id) };
            var result = await _mediator.Send(command, cancellationToken);

            return Ok(result);
        }
    }
}