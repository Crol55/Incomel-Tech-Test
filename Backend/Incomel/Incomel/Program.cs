using Incomel.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var defaultSqlConnection = builder.Configuration.GetConnectionString("DefaultSQLConnection");
// Add services to the container.
builder.Services.AddAutoMapper( typeof(Program).Assembly);
builder.Services.AddDbContext<ApplicationDbContext>( option => {
    option.UseMySql(defaultSqlConnection, ServerVersion.AutoDetect(defaultSqlConnection));
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// services CORS
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corsapp");

app.UseAuthorization();

app.MapControllers();

app.Run();
