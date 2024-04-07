namespace IPC.DataLayer
{
    using Microsoft.EntityFrameworkCore;

    public class IPCReadContext : IPCContext
    {
        public IPCReadContext(DbContextOptions<IPCReadContext> options)
            : base(options)
        {
        }
    }
}
