namespace IPC.DTOs.Validators
{
    using FluentValidation;
    using IPC.DTOs.InputModels;

    public class PersonInputValidator : AbstractValidator<PersonInputModel>
    {
        public PersonInputValidator()
        {
            RuleFor(person => person.FirstName)
                .NotNull()
                .MaximumLength(50);

            RuleFor(person => person.LastName)
                .NotNull()
                .MaximumLength(50);

            RuleFor(person => person.IBAN)
                .NotNull()
                .MaximumLength(34)
                .Matches(@"^[A-Z]{2}(?:[ ]?[0-9]){18,20}$");

            RuleFor(person => person.Address)
                .NotNull()
                .MaximumLength(500);

            RuleFor(person => person.DateOfBirth)
               .NotNull();

            RuleFor(p => p.PhoneNumber)
                .NotNull()
                .MinimumLength(3)
                .MaximumLength(13)
                .Matches(@"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
        }
    }
}
