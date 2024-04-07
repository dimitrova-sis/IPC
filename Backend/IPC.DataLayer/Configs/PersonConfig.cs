using IPC.Domain.Aggregates;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IPC.DataLayer.Configs
{
    public class PersonConfig : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> builder)
        {
            builder
            .Property(b => b.FirstName)
            .HasMaxLength(50)
            .IsRequired();

            builder
            .Property(b => b.LastName)
            .HasMaxLength(50)
            .IsRequired();

            builder
            .Property(b => b.Address)
            .HasMaxLength(500)
            .IsRequired();

            builder
            .Property(b => b.IBAN)
            .HasMaxLength(34)
            .IsRequired();

            builder
            .Property(b => b.PhoneNumber)
            .HasMaxLength(13)
            .IsRequired();

            builder
           .Property(b => b.DateOfBirth)
           .HasColumnType("date")
           .IsRequired();
        }
    }
}
