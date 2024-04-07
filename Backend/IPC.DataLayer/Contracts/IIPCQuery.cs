namespace IPC.DataLayer.Contracts
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;

    public interface IIPCQuery<T> where T : class
    {
        IQueryable<T> All(params Expression<Func<T, object>>[] includeExpressions);    
    }
}
