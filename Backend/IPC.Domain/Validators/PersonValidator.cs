namespace IPC.Domain.Validators
{
    using FluentValidation;
    using IPC.Domain.Aggregates;

    internal class PersonValidator : AbstractValidator<Person>
    {
        public PersonValidator()
        {
            RuleFor(person => person.FirstName)
                .NotNull()
                .MaximumLength(50);

            RuleFor(person => person.LastName)
                .NotNull()
                .MaximumLength(50);

            RuleFor(p => p.PhoneNumber)
                .NotNull()
                .MinimumLength(3)
                .MaximumLength(13)
                .Matches(@"^\+?[0-9]{3,13}$");
        }
    }
}
