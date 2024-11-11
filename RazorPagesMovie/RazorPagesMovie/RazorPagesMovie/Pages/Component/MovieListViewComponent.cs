using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Component
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
            List<Movie> movies = await _context.Movie.OrderByDescending(r => r.Price).ToListAsync();
            return View(movies);
        }
    }
}
