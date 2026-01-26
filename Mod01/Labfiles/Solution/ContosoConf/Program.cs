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

// Enable default files (index.htm)
var defaultFilesOptions = new DefaultFilesOptions();
defaultFilesOptions.DefaultFileNames.Clear();
defaultFilesOptions.DefaultFileNames.Add("index.htm");
app.UseDefaultFiles(defaultFilesOptions);

// Serve static files from wwwroot with MIME type for .manifest files
var provider = new Microsoft.AspNetCore.StaticFiles.FileExtensionContentTypeProvider();
provider.Mappings[".manifest"] = "text/cache-manifest";
app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider
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

