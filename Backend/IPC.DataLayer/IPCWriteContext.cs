namespace IPC.DataLayer
{
    using Microsoft.EntityFrameworkCore;

    public class IPCWriteContext : IPCContext
    {
        public IPCWriteContext(DbContextOptions<IPCWriteContext> options)
            : base(options)
        {
        }
    }
}
