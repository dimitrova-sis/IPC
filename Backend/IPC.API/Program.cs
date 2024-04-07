using IPC.DataLayer;
using IPC.DataLayer.Contracts;
using IPC.DataLayer.Implementations;
using IPC.UseCases.PersonUseCases.Commands;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigin = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("myAppCors", policy =>
    {
        policy.WithOrigins(allowedOrigin)
                .AllowAnyHeader()
                .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var writeConnectionString = builder.Configuration.GetConnectionString("IPCWriteConnection");
builder.Services.AddDbContext<IPCWriteContext>(options => options.UseSqlServer(writeConnectionString));

var readConnectionString = builder.Configuration.GetConnectionString("IPCReadConnection");
builder.Services.AddDbContext<IPCReadContext>(options => options.UseSqlServer(readConnectionString));

builder.Services.AddMediatR(typeof(CreatePerson));

builder.Services.AddScoped(typeof(IIPCCommand<>), typeof(IPCCommand<>));
builder.Services.AddScoped(typeof(IIPCQuery<>), typeof(IPCQuery<>));

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("myAppCors");

app.UseAuthorization();

app.MapControllers();

app.Run();
