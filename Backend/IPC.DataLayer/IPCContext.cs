namespace IPC.DataLayer
{
    using IPC.DataLayer.Configs;
    using IPC.Domain.Aggregates;
    using Microsoft.EntityFrameworkCore;

    public class IPCContext : DbContext
    {
        public IPCContext(DbContextOptions options)
            : base(options)
        {

        }

        public virtual DbSet<Person> Person { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new PersonConfig());
        }
    }
}
