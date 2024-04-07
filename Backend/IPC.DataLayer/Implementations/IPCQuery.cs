namespace IPC.DataLayer.Implementations
{
    using IPC.DataLayer.Contracts;
    using Microsoft.EntityFrameworkCore;
    using System.Linq.Expressions;

    public class IPCQuery<T> : IIPCQuery<T> where T : class
    {
        private readonly DbContext context;
        private readonly DbSet<T> entities;

        public IPCQuery(IPCReadContext context)
        {
            this.context = context;
            this.entities = context.Set<T>();
        }

        public IQueryable<T> All(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> set = this.entities;

            foreach (var includeExpression in includes)
            {
                set = set.Include(includeExpression);
            }

            return set;
        }
    }
}
