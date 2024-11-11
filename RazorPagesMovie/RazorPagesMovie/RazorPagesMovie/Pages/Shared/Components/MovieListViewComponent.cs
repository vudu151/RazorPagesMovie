using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Shared.Components
{
    public class MovieListViewComponent : ViewComponent
    {
        private readonly RazorPagesMovieContext _context;

        public MovieListViewComponent(RazorPagesMovieContext context)
        {
            _context = context;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<Movie> movies = await _context.Movie.OrderByDescending(p => p.Price).ToListAsync();
            return View(movies);
        }
    }
}
