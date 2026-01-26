using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

// Enable default files (index.htm, default.htm, etc.) from content root
var defaultFilesOptions = new DefaultFilesOptions();
defaultFilesOptions.DefaultFileNames.Clear();
defaultFilesOptions.DefaultFileNames.Add("index.htm");
defaultFilesOptions.FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(
    app.Environment.ContentRootPath);
app.UseDefaultFiles(defaultFilesOptions);

app.UseStaticFiles();

// Serve static files from content root for backward compatibility
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(
        app.Environment.ContentRootPath),
    RequestPath = ""
});

app.UseRouting();
app.UseAuthorization();

// Enable WebSocket support
app.UseWebSockets();

// Map WebSocket endpoint
app.Map("/live", ContosoConf.Live.LiveWebSocketMiddleware.HandleWebSocketRequest);

// Configure routes - migrated from Global.asax.cs
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

