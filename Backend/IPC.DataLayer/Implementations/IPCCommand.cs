namespace IPC.DataLayer.Implementations
{
    using IPC.DataLayer.Contracts;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Query;
    using System.Linq.Expressions;

    public class IPCCommand<T> : IIPCCommand<T> where T : class, new()
    {
        private readonly DbContext context;
        private readonly DbSet<T> entities;

        public IPCCommand(IPCWriteContext context)
        {
            this.context = context;
            this.entities = context.Set<T>();
        }

        public T Add(T entity)
        {
            return this.entities.Add(entity).Entity;
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

        public void Delete(T entity)
        {
            this.entities.Remove(entity);
        }

        public async Task SaveAsync()
        {
            await this.context.SaveChangesAsync();
        }
    }
}
