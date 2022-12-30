import { AppState } from "../AppState.js";
import { Event } from "../models/Event.js";
import { Testimonial } from "../models/Testimonial.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class TestimonialsService {
  async createTestimonial(testimonialData) {
    const res = await api.post("api/testimonials", testimonialData);
    logger.log(res.data);
    let newTestimonial = new Testimonial(res.data);
    AppState.testimonials.push(newTestimonial);
  }

  async getTestimonials() {
    const res = await api.get("api/testimonials");
    logger.log(res.data);
    AppState.testimonials = res.data.map((e) => new Testimonial(e));
  }
  async updateTestimonial(testimonialData) {
    let id = testimonialData.id;
    const res = await api.put(`api/testimonials/${id}`, testimonialData);
    logger.log(res.data);
    let updatedTestimonial = new Testimonial(res.data);
    let index = AppState.testimonials.findIndex((e) => e.id == updatedTestimonial.id);
    AppState.testimonials[index] = updatedTestimonial;
  }
  async deleteTestimonial(id) {
    await api.delete(`api/testimonials/${id}`);
    AppState.testimonials = AppState.testimonials.filter((e) => e.id != id);
  }
}
export const testimonialsService = new TestimonialsService();
