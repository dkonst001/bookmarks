using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace isracard
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			services.Configure<CookiePolicyOptions>(options =>
			{
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});

			services.AddDistributedMemoryCache();

			services.AddSession(options =>
			{
				options.IdleTimeout = TimeSpan.FromMinutes(10);
				options.Cookie.HttpOnly = true;
			});

			services.Configure<CookiePolicyOptions>(options =>
			{
				// This lambda determines whether user consent for non-essential cookies is needed for a given request.
				options.CheckConsentNeeded = context => false;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});


			// ------------------------------------------------------
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

			//services.AddSession(options =>
			//{
			//	options.Cookie.Name = ".Bookmarks.Session";
			//	options.IdleTimeout = TimeSpan.FromMinutes(120);
			//});

			// In production, the Angular files will be served from this directory
			services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
				app.UseHsts();
			}

			
			// -------------------------------------
			if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }
			// -------------------------------
			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseCookiePolicy();
			app.UseSession();
			// app.UseHttpContextItemsMiddleware();
			
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
