namespace IPC.DataLayer.Contracts
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;

    public interface IIPCCommand<T> where T : class, new()
    {
        IQueryable<T> All(params Expression<Func<T, object>>[] includes);

        T Add(T entity);

        void Delete(T entity);

        Task SaveAsync();
    }
}
